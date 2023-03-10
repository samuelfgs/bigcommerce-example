// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vn4GCfRoYe35APzZGsNDnF
// Component: xkAYXInzzC2Et5
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
import NavItem from "../../NavItem"; // plasmic-import: HEtuu_qCUDpai/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_color_tokens/plasmic_plasmic_kit_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_copy_of_big_commerce_example.module.css"; // plasmic-import: vn4GCfRoYe35APzZGsNDnF/projectcss
import sty from "./PlasmicLoading.module.css"; // plasmic-import: xkAYXInzzC2Et5/css

export type PlasmicLoading__VariantMembers = {};

export type PlasmicLoading__VariantsArgs = {};
type VariantPropType = keyof PlasmicLoading__VariantsArgs;
export const PlasmicLoading__VariantProps = new Array<VariantPropType>();

export type PlasmicLoading__ArgsType = {};
type ArgPropType = keyof PlasmicLoading__ArgsType;
export const PlasmicLoading__ArgProps = new Array<ArgPropType>();

export type PlasmicLoading__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  columns?: p.Flex<"div">;
};

export interface DefaultLoadingProps {
  className?: string;
}

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

function PlasmicLoading__RenderFunc(props: {
  variants: PlasmicLoading__VariantsArgs;
  args: PlasmicLoading__ArgsType;
  overrides: PlasmicLoading__OverridesType;

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
          className={classNames(projectcss.all, sty.column__grPoh)}
        >
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ncIso)}
            >
              <h4
                className={classNames(
                  projectcss.all,
                  projectcss.h4,
                  projectcss.__wab_text,
                  sty.h4__fE77
                )}
              >
                {"All Categories"}
              </h4>
            </p.Stack>
          ) : null}
        </p.Stack>

        <div className={classNames(projectcss.all, sty.column__n2ECa)} />

        <div className={classNames(projectcss.all, sty.column__wpgK1)}>
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__funD)}
            >
              <h4
                className={classNames(
                  projectcss.all,
                  projectcss.h4,
                  projectcss.__wab_text,
                  sty.h4___3UjPb
                )}
              >
                {"Relevance"}
              </h4>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fcsbM)}
              >
                <NavItem
                  className={classNames("__wab_instance", sty.navItem__pYtco)}
                  queryParam={"sort=trending-desc" as const}
                >
                  {"Trending"}
                </NavItem>

                <NavItem
                  className={classNames("__wab_instance", sty.navItem__x2ULq)}
                  queryParam={"sort=latest-desc" as const}
                >
                  {"Latest Arrivals"}
                </NavItem>

                <NavItem
                  className={classNames("__wab_instance", sty.navItem___6H1Kx)}
                  queryParam={"sort=price-asc" as const}
                >
                  {"Price: Low to High"}
                </NavItem>

                <NavItem
                  className={classNames("__wab_instance", sty.navItem__b2IV6)}
                  queryParam={"sort=price-desc" as const}
                >
                  {"Price: High to Low"}
                </NavItem>
              </p.Stack>
            </p.Stack>
          ) : null}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "columns"],
  navbar: ["navbar"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoading__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoading__VariantsArgs;
    args?: PlasmicLoading__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLoading__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLoading__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicLoading__ArgProps,
          internalVariantPropNames: PlasmicLoading__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLoading__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoading";
  } else {
    func.displayName = `PlasmicLoading.${nodeName}`;
  }
  return func;
}

export const PlasmicLoading = Object.assign(
  // Top-level PlasmicLoading renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicLoading
    internalVariantProps: PlasmicLoading__VariantProps,
    internalArgProps: PlasmicLoading__ArgProps
  }
);

export default PlasmicLoading;
/* prettier-ignore-end */
