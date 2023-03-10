// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vn4GCfRoYe35APzZGsNDnF
// Component: RN8SoV_Y6fgMzV
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navbar from "../../Navbar"; // plasmic-import: _gxfyOiD26jFy/component
import { CategoryCollection } from "@plasmicpkgs/commerce"; // plasmic-import: RDlk_ahCK2O87m/codeComponent
import NavItem from "../../NavItem"; // plasmic-import: HEtuu_qCUDpai/component
import { CategoryLink } from "@plasmicpkgs/commerce"; // plasmic-import: IgUPztABXZHl2T/codeComponent
import { CategoryField } from "@plasmicpkgs/commerce"; // plasmic-import: 84Rc4ZXyToFdPo/codeComponent
import { ProductCollection } from "@plasmicpkgs/commerce"; // plasmic-import: k1F944uZV3E4YL/codeComponent
import ProductCard from "../../ProductCard"; // plasmic-import: nH5iseI9bs8m34/component
import { ProductTextField } from "@plasmicpkgs/commerce"; // plasmic-import: QD8dH-4J4XrXzR/codeComponent
import { ProductPriceComponent } from "@plasmicpkgs/commerce"; // plasmic-import: fzJDSoSq7d4NGS/codeComponent
import Footer from "../../Footer"; // plasmic-import: Ut_4sWTqalBqM5/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_color_tokens/plasmic_plasmic_kit_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_copy_of_big_commerce_example.module.css"; // plasmic-import: vn4GCfRoYe35APzZGsNDnF/projectcss
import sty from "./PlasmicSearch.module.css"; // plasmic-import: RN8SoV_Y6fgMzV/css

export type PlasmicSearch__VariantMembers = {};

export type PlasmicSearch__VariantsArgs = {};
type VariantPropType = keyof PlasmicSearch__VariantsArgs;
export const PlasmicSearch__VariantProps = new Array<VariantPropType>();

export type PlasmicSearch__ArgsType = {};
type ArgPropType = keyof PlasmicSearch__ArgsType;
export const PlasmicSearch__ArgProps = new Array<ArgPropType>();

export type PlasmicSearch__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  columns?: p.Flex<"div">;
  categoryCollection?: p.Flex<typeof CategoryCollection>;
  categoryLink?: p.Flex<typeof CategoryLink>;
  categoryField?: p.Flex<typeof CategoryField>;
  productCollection?: p.Flex<typeof ProductCollection>;
  productCard?: p.Flex<typeof ProductCard>;
  productTextField?: p.Flex<typeof ProductTextField>;
  productPrice?: p.Flex<typeof ProductPriceComponent>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultSearchProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSearch__RenderFunc(props: {
  variants: PlasmicSearch__VariantsArgs;
  args: PlasmicSearch__ArgsType;
  overrides: PlasmicSearch__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column___3Edjs)}
            >
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__ixUm6)}
                >
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__xgsEh
                    )}
                  >
                    {"All Categories"}
                  </h4>

                  <CategoryCollection
                    data-plasmic-name={"categoryCollection"}
                    data-plasmic-override={overrides.categoryCollection}
                    className={classNames(
                      "__wab_instance",
                      sty.categoryCollection
                    )}
                    emptyMessage={
                      <ph.DataCtxReader>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__btIb
                            )}
                          >
                            {"No collection found!"}
                          </div>
                        )}
                      </ph.DataCtxReader>
                    }
                    loadingMessage={
                      <ph.DataCtxReader>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___7HZb3
                            )}
                          >
                            {"Loading..."}
                          </div>
                        )}
                      </ph.DataCtxReader>
                    }
                  >
                    <ph.DataCtxReader>
                      {$ctx => (
                        <NavItem
                          className={classNames(
                            "__wab_instance",
                            sty.navItem__dtyyx
                          )}
                        >
                          <CategoryLink
                            data-plasmic-name={"categoryLink"}
                            data-plasmic-override={overrides.categoryLink}
                            className={classNames(
                              "__wab_instance",
                              sty.categoryLink
                            )}
                            linkDest={"/search" as const}
                          >
                            <CategoryField
                              data-plasmic-name={"categoryField"}
                              data-plasmic-override={overrides.categoryField}
                              className={classNames(
                                "__wab_instance",
                                sty.categoryField
                              )}
                              field={"name" as const}
                            />
                          </CategoryLink>
                        </NavItem>
                      )}
                    </ph.DataCtxReader>
                  </CategoryCollection>
                </p.Stack>
              ) : null}
            </p.Stack>

            <div className={classNames(projectcss.all, sty.column__z0GlQ)}>
              <ProductCollection
                data-plasmic-name={"productCollection"}
                data-plasmic-override={overrides.productCollection}
                category={"23" as const}
                className={classNames("__wab_instance", sty.productCollection)}
                emptyMessage={
                  <ph.DataCtxReader>
                    {$ctx => (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__zscxB
                        )}
                      >
                        {"No product found!"}
                      </div>
                    )}
                  </ph.DataCtxReader>
                }
                loadingMessage={
                  <ph.DataCtxReader>
                    {$ctx => (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mh7Pw
                        )}
                      >
                        {"Loading..."}
                      </div>
                    )}
                  </ph.DataCtxReader>
                }
                sort={"price-asc" as const}
              >
                <ph.DataCtxReader>
                  {$ctx => (
                    <ProductCard
                      data-plasmic-name={"productCard"}
                      data-plasmic-override={overrides.productCard}
                      className={classNames("__wab_instance", sty.productCard)}
                      color={"violet" as const}
                      slot={
                        <ProductPriceComponent
                          data-plasmic-name={"productPrice"}
                          data-plasmic-override={overrides.productPrice}
                          className={classNames(
                            "__wab_instance",
                            sty.productPrice
                          )}
                        />
                      }
                    >
                      <ProductTextField
                        data-plasmic-name={"productTextField"}
                        data-plasmic-override={overrides.productTextField}
                        className={classNames(
                          "__wab_instance",
                          sty.productTextField
                        )}
                        field={"name" as const}
                      />
                    </ProductCard>
                  )}
                </ph.DataCtxReader>
              </ProductCollection>
            </div>

            <div className={classNames(projectcss.all, sty.column__acOqN)}>
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__e16th)}
                >
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__hRxmm
                    )}
                  >
                    {"Relevance"}
                  </h4>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__j7Xr)}
                  >
                    <NavItem
                      className={classNames(
                        "__wab_instance",
                        sty.navItem___9A6K5
                      )}
                      queryParam={"sort=trending-desc" as const}
                    >
                      {"Trending"}
                    </NavItem>

                    <NavItem
                      className={classNames(
                        "__wab_instance",
                        sty.navItem___9KPlk
                      )}
                      queryParam={"sort=latest-desc" as const}
                    >
                      {"Latest Arrivals"}
                    </NavItem>

                    <NavItem
                      className={classNames(
                        "__wab_instance",
                        sty.navItem__uf2MA
                      )}
                      isActive={true}
                      queryParam={"sort=price-asc" as const}
                    >
                      {"Price: Low to High"}
                    </NavItem>

                    <NavItem
                      className={classNames(
                        "__wab_instance",
                        sty.navItem___6Nkft
                      )}
                      queryParam={"sort=price-desc" as const}
                    >
                      {"Price: High to Low"}
                    </NavItem>
                  </p.Stack>
                </p.Stack>
              ) : null}
            </div>
          </div>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "columns",
    "categoryCollection",
    "categoryLink",
    "categoryField",
    "productCollection",
    "productCard",
    "productTextField",
    "productPrice",
    "footer"
  ],
  navbar: ["navbar"],
  columns: [
    "columns",
    "categoryCollection",
    "categoryLink",
    "categoryField",
    "productCollection",
    "productCard",
    "productTextField",
    "productPrice"
  ],
  categoryCollection: ["categoryCollection", "categoryLink", "categoryField"],
  categoryLink: ["categoryLink", "categoryField"],
  categoryField: ["categoryField"],
  productCollection: [
    "productCollection",
    "productCard",
    "productTextField",
    "productPrice"
  ],
  productCard: ["productCard", "productTextField", "productPrice"],
  productTextField: ["productTextField"],
  productPrice: ["productPrice"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  columns: "div";
  categoryCollection: typeof CategoryCollection;
  categoryLink: typeof CategoryLink;
  categoryField: typeof CategoryField;
  productCollection: typeof ProductCollection;
  productCard: typeof ProductCard;
  productTextField: typeof ProductTextField;
  productPrice: typeof ProductPriceComponent;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSearch__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSearch__VariantsArgs;
    args?: PlasmicSearch__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSearch__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSearch__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSearch__ArgProps,
          internalVariantPropNames: PlasmicSearch__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSearch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSearch";
  } else {
    func.displayName = `PlasmicSearch.${nodeName}`;
  }
  return func;
}

export const PlasmicSearch = Object.assign(
  // Top-level PlasmicSearch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    columns: makeNodeComponent("columns"),
    categoryCollection: makeNodeComponent("categoryCollection"),
    categoryLink: makeNodeComponent("categoryLink"),
    categoryField: makeNodeComponent("categoryField"),
    productCollection: makeNodeComponent("productCollection"),
    productCard: makeNodeComponent("productCard"),
    productTextField: makeNodeComponent("productTextField"),
    productPrice: makeNodeComponent("productPrice"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicSearch
    internalVariantProps: PlasmicSearch__VariantProps,
    internalArgProps: PlasmicSearch__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSearch;
/* prettier-ignore-end */
