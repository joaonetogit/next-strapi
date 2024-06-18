export function GetStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_URL ?? process.env.BASE_URL;
}
