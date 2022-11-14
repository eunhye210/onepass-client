function getEmailId(email) {
  const fullEmailId = email.split("@")[0];
  const first3Chars = fullEmailId.slice(0, 3);
  const securedEmailId = first3Chars.padEnd(fullEmailId.length, "*");

  return securedEmailId;
}

export default getEmailId;
