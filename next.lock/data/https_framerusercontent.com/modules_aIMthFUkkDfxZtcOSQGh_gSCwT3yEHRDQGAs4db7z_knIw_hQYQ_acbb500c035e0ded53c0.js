import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (6906a2c)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,Stack}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";const enabledGestures={"303:473":{"hover":true}};const cycleOrder=["303:473"];const variantClassNames={"303:473":"framer-v-i8cpn9"};const humanReadableVariantMap={};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,width,height,layoutId,variant:outerVariant="303:473",title:QwjLINHsD="Ouvrir dans docs",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"303:473",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const variantProps=React.useMemo(()=>({}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const isDisplayed1=()=>{if(gestureVariant==="303:473-hover")return true;return false;};const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-63rRn",classNames),style:{"display":"contents","pointerEvents":"auto"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"303:473",className:cx("framer-i8cpn9",className),style:{...style},background:null,"data-framer-name":"Variant 1",transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("303:473"),children:[/*#__PURE__*/ _jsx(motion.div,{layoutId:"303:474",className:"framer-1m5fyml",style:{"borderBottomLeftRadius":2,"borderBottomRightRadius":2,"borderTopRightRadius":2,"borderTopLeftRadius":2,"backgroundColor":"rgb(93, 141, 245)"},"data-framer-name":"Rectangle 79",transition:transition,layoutDependency:layoutDependency,...addVariantProps("303:474")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"8px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"left"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,alignment:"left",fonts:["GF;Inter-500"],layoutId:"303:475",className:"framer-r6q0hl",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='font-size: 0'><span style=''>Ouvrir dans docs</span><br></span></span>",text:QwjLINHsD,transition:transition,layoutDependency:layoutDependency,...addVariantProps("303:475")}),isDisplayed1()&&/*#__PURE__*/ _jsx(Stack,{layoutId:"VQwiiGQHb",className:"framer-161syb6",style:{"backgroundColor":"rgb(217, 217, 217)"},direction:"horizontal",distribution:"start",alignment:"start",gap:10,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"auto","height":"100%","padding":"3px 7px 3px 7px"},center:false,"data-framer-name":"Frame 4",transition:transition,layoutDependency:layoutDependency,...addVariantProps("VQwiiGQHb"),children:/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"rgb(51, 51, 51)","--framer-font-size":"10px","--framer-letter-spacing":"0.2px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"11px","--framer-text-alignment":"left"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,alignment:"left",fonts:["GF;Inter-regular"],layoutId:"tDVhSnuiK",className:"framer-8wpv9d",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='font-size: 0'><span style=''>https://www.google-docs.com/BDC_accompagnementSE021/doc?id=83874662519</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("tDVhSnuiK")})})]})})}));});const css=[".framer-63rRn [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-63rRn * { box-sizing: border-box; }",".framer-63rRn .framer-i8cpn9 { position: relative; overflow: visible; width: 97px; height: 28px; }",".framer-63rRn .framer-1m5fyml { position: absolute; overflow: hidden; width: 97px; height: 28px; left: 0px; top: 0px; flex: none; }",".framer-63rRn .framer-r6q0hl { position: absolute; overflow: visible; width: auto; height: auto; left: 16px; top: 10px; flex: none; white-space: pre; }",".framer-63rRn .framer-161syb6 { position: absolute; overflow: visible; width: min-content; height: 18px; bottom: -154px; left: -301px; flex: none; }",".framer-63rRn .framer-8wpv9d { position: relative; overflow: visible; width: auto; height: auto; flex: none; white-space: pre; }",".framer-63rRn.framer-v-i8cpn9 .framer-i8cpn9 { cursor: pointer; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 28
 * @framerIntrinsicWidth 97
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "LQet4vjtz": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"QwjLINHsD": "title"}
 */ const FramerknIw_hQYQ=withCSS(Component,css);export default FramerknIw_hQYQ;FramerknIw_hQYQ.displayName="Google doc / button";FramerknIw_hQYQ.defaultProps={"width":97,"height":28};addPropertyControls(FramerknIw_hQYQ,{"QwjLINHsD":{"type":ControlType.String,"title":"Title","defaultValue":"Ouvrir dans docs","displayTextArea":false}});addFonts(FramerknIw_hQYQ,[{"url":"https://fonts.gstatic.com/s/inter/v8/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf","family":"Inter","style":"normal","weight":"500","moduleAsset":{"url":"https://fonts.gstatic.com/s/inter/v8/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf","localModuleIdentifier":"local-module:canvasComponent/knIw_hQYQ:default"}},{"url":"https://fonts.gstatic.com/s/inter/v8/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf","family":"Inter","style":"normal","weight":"400","moduleAsset":{"url":"https://fonts.gstatic.com/s/inter/v8/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf","localModuleIdentifier":"local-module:canvasComponent/knIw_hQYQ:default"}}]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerknIw_hQYQ","slots":[],"annotations":{"framerIntrinsicHeight":"28","framerIntrinsicWidth":"97","framerVariables":"{\"QwjLINHsD\": \"title\"}","framerContractVersion":"1","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"LQet4vjtz\": {\"layout\": [\"fixed\", \"fixed\"]}}}"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./knIw_hQYQ.map