import { SWRHook } from '@plasmicpkgs/commerce'
import { useProduct, UseProduct } from '@plasmicpkgs/commerce'

import {
  GetProductByIdQuery,
  GetProductBySlugQuery,
} from '../schema'

import {
  getProductQuery,
  normalizeProduct,
} from '../utils'

import type { GetProductHook } from '@plasmicpkgs/commerce'
import { getProductQueryById } from '../utils/queries/get-product-query'

export type GetProductInput = {
  id?: string
}

export default useProduct as UseProduct<typeof handler>

export const handler: SWRHook<GetProductHook> = {
  fetchOptions: {
    query: getProductQuery,
  },
  async fetcher({ input, options, fetch }) {
    const { id } = input
    if (!id) {
      return null
    }

    let product = null;
    if (id.startsWith("gid://shopify")) {
      const data = await fetch<GetProductByIdQuery>({
        query: getProductQueryById,
        variables: { id }
      });
      product = data.product;
    } else {
      const data = await fetch<GetProductBySlugQuery>({
        query: options.query,
        variables: { slug: id }
      });

      if (data.productByHandle) {
        product = data.productByHandle;
      }
    }

    return product ? normalizeProduct(product) : null;
  },
  useHook:
    ({ useData }) =>
    (input = {}) => {
      return useData({
        input: [
          ['id', input.id],
        ],
        swrOptions: {
          revalidateOnFocus: false,
          ...input.swrOptions,
        },
      })
    },
}
