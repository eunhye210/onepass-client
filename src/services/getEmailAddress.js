function getEmailAddress(email) {
  const fullEmailId = email.split("@")[0];
  const first3Chars = fullEmailId.slice(0, 3);
  const securedEmailId = first3Chars.padEnd(fullEmailId.length, "*");

  return securedEmailId + "@" + email.split("@")[1];
}

export default getEmailAddress;
