(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{439:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(9),r=(n(0),n(469)),i={id:"glossary-of-terms",title:"Glossary of terms",sidebar_label:"Glossary of terms"},c={id:"version-5.x/glossary-of-terms",title:"Glossary of terms",description:"> This is a new section of the documentation and it's missing a lot of terms! Please [submit a pull request or an issue](https://github.com/react-navigation/react-navigation.github.io) with a term that you think should be explained here.",source:"@site/versioned_docs/version-5.x/glossary-of-terms.md",permalink:"/docs/glossary-of-terms",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/glossary-of-terms.md",version:"5.x",sidebar_label:"Glossary of terms",sidebar:"version-5.x/docs",previous:{title:"Next steps",permalink:"/docs/next-steps"},next:{title:"Compatibility layer",permalink:"/docs/compatibility"}},s=[{value:"Header",id:"header",children:[]},{value:"Navigator",id:"navigator",children:[]},{value:"Screen component",id:"screen-component",children:[]},{value:"Navigation Prop",id:"navigation-prop",children:[]},{value:"Route prop",id:"route-prop",children:[]},{value:"Navigation State",id:"navigation-state",children:[]},{value:"Route",id:"route",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This is a new section of the documentation and it's missing a lot of terms! Please ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation.github.io"}),"submit a pull request or an issue")," with a term that you think should be explained here.")),Object(r.b)("h2",{id:"header"},"Header"),Object(r.b)("p",null,"Also known as navigation header, navigation bar, navbar, and probably many other things. This is the rectangle at the top of your screen that contains the back button and the title for your screen. The entire rectangle is often referred to as the header in React Navigation."),Object(r.b)("h2",{id:"navigator"},"Navigator"),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"Navigator")," contains ",Object(r.b)("inlineCode",{parentName:"p"},"Screen")," elements as its children to define the configuration for routes.\n",Object(r.b)("inlineCode",{parentName:"p"},"NavigationContainer")," is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure. Usually, we'd render this component at the root of our app, which is usually the component exported from ",Object(r.b)("inlineCode",{parentName:"p"},"App.js"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator> // <---- This is a Navigator\n        <Stack.Screen name="Home" component={HomeScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),Object(r.b)("h2",{id:"screen-component"},"Screen component"),Object(r.b)("p",null,"A screen component is a component that we use in our route configuration."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const Stack = createStackNavigator();\n\nconst StackNavigator = (\n  <Stack.Navigator>\n    <Stack.Screen\n      name="Home"\n      component={HomeScreen} // <----\n    />\n    <Stack.Screen\n      name="Details"\n      component={DetailsScreen} // <----\n    />\n  </Stack.Navigator>\n);\n')),Object(r.b)("p",null,"The suffix ",Object(r.b)("inlineCode",{parentName:"p"},"Screen")," in the component name is entirely optional, but a frequently used convention; we could call it ",Object(r.b)("inlineCode",{parentName:"p"},"Michael")," and this would work just the same."),Object(r.b)("p",null,"We saw earlier that our screen components are provided with the ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," prop. It's important to note that ",Object(r.b)("em",{parentName:"p"},"this only happens if the screen is rendered as a route by React Navigation")," (for example, in response to ",Object(r.b)("inlineCode",{parentName:"p"},"navigation.navigate"),"). For example, if we render ",Object(r.b)("inlineCode",{parentName:"p"},"DetailsScreen")," as a child of ",Object(r.b)("inlineCode",{parentName:"p"},"HomeScreen"),", then ",Object(r.b)("inlineCode",{parentName:"p"},"DetailsScreen")," won't be provided with the ",Object(r.b)("inlineCode",{parentName:"p"},"navigation"),' prop, and when you press the "Go to Details... again" button on the Home screen, the app will throw one of the quintessential JavaScript exceptions "undefined is not an object".'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => navigation.navigate('Details')}\n      />\n      <DetailsScreen />\n    </View>\n  );\n}\n")),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/navigation-prop"}),'"Navigation prop reference"')," section goes into more detail on this, describes workarounds, and provides more information on other properties available on ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," prop."),Object(r.b)("h2",{id:"navigation-prop"},"Navigation Prop"),Object(r.b)("p",null,"This prop will be passed into all screens, and it can be used for the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dispatch")," will send an action up to the router"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"navigate"),", ",Object(r.b)("inlineCode",{parentName:"li"},"goBack"),", etc are available to dispatch actions in a convenient way")),Object(r.b)("p",null,"Navigators can also accept a navigation prop, which they should get from the parent navigator, if there is one."),Object(r.b)("p",null,"For more details, see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/navigation-prop"}),'"Navigation prop document"'),"."),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/route-prop"}),'"Route prop reference"')," section goes into more detail on this, describes workarounds, and provides more information on other properties available on ",Object(r.b)("inlineCode",{parentName:"p"},"route")," prop."),Object(r.b)("h2",{id:"route-prop"},"Route prop"),Object(r.b)("p",null,"This prop will be passed into all screens. Contains information about current route i.e. ",Object(r.b)("inlineCode",{parentName:"p"},"params"),", ",Object(r.b)("inlineCode",{parentName:"p"},"key")," and ",Object(r.b)("inlineCode",{parentName:"p"},"name"),"."),Object(r.b)("h2",{id:"navigation-state"},"Navigation State"),Object(r.b)("p",null,"The state of a navigator generally looks something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  key: 'StackRouterRoot',\n  index: 1,\n  routes: [\n    { key: 'A', name: 'Home' },\n    { key: 'B', name: 'Profile' },\n  ]\n}\n")),Object(r.b)("p",null,'For this navigation state, there are two routes (which may be tabs, or cards in a stack). The index indicates the active route, which is "B".'),Object(r.b)("h2",{id:"route"},"Route"),Object(r.b)("p",null,'Each route is a piece of navigation state which contains a key to identify it, and a "name" to designate the type of route. It can also contain arbitrary params:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  key: 'B',\n  name: 'Profile',\n  params: { id: '123' }\n}\n")))}p.isMDXComponent=!0},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(m,c({ref:t},l,{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);