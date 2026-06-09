import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredFields = [
  "id",
  "name",
  "author",
  "repository",
  "detail_page",
  "verified_at",
  "verification_sources",
  "source",
  "tags",
  "one_liner",
  "prerequisites",
  "skill_description",
  "use_cases",
  "summary",
  "workflow",
  "limitations"
];

const failures = [];
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const exists = (file) => fs.existsSync(path.join(root, file));

const skillFiles = fs
  .readdirSync(path.join(root, "data", "skills"))
  .filter((file) => file.endsWith(".json"))
  .sort();

const skills = skillFiles.map((file) => {
  const skill = JSON.parse(read(path.join("data", "skills", file)));
  skill.__file = file;
  return skill;
});

for (const skill of skills) {
  for (const field of requiredFields) {
    if (!(field in skill)) {
      failures.push(`${skill.__file}: missing field "${field}"`);
    }
  }

  if (skill.detail_page && !exists(skill.detail_page)) {
    failures.push(`${skill.__file}: missing detail page "${skill.detail_page}"`);
  }
}

const readme = read("README.md");
const index = read("index.html");

const readmeRows = [...readme.matchAll(/^\| \[([^\]]+)\]/gm)].map((match) => match[1]);
const indexNames = [...index.matchAll(/name: "([^"]+)"/g)].map((match) => match[1]);
const detailLinks = [...index.matchAll(/detail: "([^"]+)"/g)].map((match) => match[1]);
const skillNames = skills.map((skill) => skill.name);
const skillDetails = skills.map((skill) => skill.detail_page);
const staticIndexLinks = [...index.matchAll(/href="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((href) => !href.startsWith("http") && !href.startsWith("#") && !href.includes("${"));
const readmeLocalLinks = [...readme.matchAll(/\]\((docs\/skills\/[^)]+|index\.html)\)/g)].map((match) => match[1]);

const assertSameSet = (label, actual, expected) => {
  const missing = expected.filter((item) => !actual.includes(item));
  const extra = actual.filter((item) => !expected.includes(item));

  if (missing.length) {
    failures.push(`${label}: missing ${missing.join(", ")}`);
  }

  if (extra.length) {
    failures.push(`${label}: unexpected ${extra.join(", ")}`);
  }
};

if (readmeRows.length !== skills.length) {
  failures.push(`README skill count ${readmeRows.length} does not match data count ${skills.length}`);
}

if (indexNames.length !== skills.length) {
  failures.push(`index skill count ${indexNames.length} does not match data count ${skills.length}`);
}

assertSameSet("README skills", readmeRows, skillNames);
assertSameSet("index skills", indexNames, skillNames);
assertSameSet("index detail links", detailLinks, skillDetails);

for (const link of [...detailLinks, ...staticIndexLinks, ...readmeLocalLinks]) {
  if (!exists(link)) {
    failures.push(`missing local link "${link}"`);
  }
}

const readerViews = [
  ["README.md", readme],
  ["index.html", index]
];

for (const [file, content] of readerViews) {
  for (const pattern of [/draft/i, /status/i, /平台字段/i, /sourceAccess/i, /登录后可查看/i, /Lv1/i, /达到对应等级/, /来源权限提示/]) {
    if (pattern.test(content)) {
      failures.push(`${file}: reader-facing content contains "${pattern}"`);
    }
  }
}

const scriptStart = index.indexOf("<script>");
const scriptEnd = index.indexOf("</script>");
if (scriptStart === -1 || scriptEnd === -1 || scriptEnd <= scriptStart) {
  failures.push("index.html: missing inline script");
} else {
  new Function(index.slice(scriptStart + "<script>".length, scriptEnd));
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`ok: ${skills.length} skills, ${detailLinks.length} detail links`);
