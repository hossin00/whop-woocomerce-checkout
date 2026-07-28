import axios from "axios";

const SHOP = process.env.SHOPIFY_STORE!;
const TOKEN = process.env.SHOPIFY_ADMIN_TOKEN!;

const API = `https://${SHOP}/admin/api/2025-07/graphql.json`;

export async function createCheckout(productVariantId: string) {
  const mutation = `
    mutation checkoutCreate($variantId: ID!) {
      cartCreate(
        input: {
          lines: [
            {
              quantity: 1
              merchandiseId: $variantId
            }
          ]
        }
      ) {
        cart {
          checkoutUrl
        }
      }
    }
  `;

  const response = await axios.post(
    API,
    {
      query: mutation,
      variables: {
        variantId: productVariantId,
      },
    },
    {
      headers: {
        "X-Shopify-Access-Token": TOKEN,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.data.cartCreate.cart.checkoutUrl;
}