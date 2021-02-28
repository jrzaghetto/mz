import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, v as validate_each_argument, f as validate_slots, g as element, t as text, h as space, j as claim_element, k as children, l as claim_text, m as detach_dev, n as claim_space, o as attr_dev, p as add_location, q as null_to_empty, r as set_style, u as insert_dev, w as append_dev, x as noop, y as _slicedToArray, z as destroy_each, A as create_component, B as query_selector_all, C as claim_component, D as mount_component, E as transition_in, F as transition_out, G as destroy_component } from './client.9715eea3.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/servicesBox.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  child_ctx[3] = i;
  return child_ctx;
} // (64:4) {#each test as e, i}


function create_each_block(ctx) {
  var div4;
  var div3;
  var div0;
  var t0_value =
  /*e*/
  ctx[1].number + "";
  var t0;
  var t1;
  var div1;
  var i_1;
  var t2;
  var div2;
  var h3;
  var t3_value =
  /*e*/
  ctx[1].title + "";
  var t3;
  var t4;
  var p;
  var t5_value =
  /*e*/
  ctx[1].description + "";
  var t5;
  var t6;
  var button;
  var a;
  var t7;
  var t8;
  var block = {
    c: function create() {
      div4 = element("div");
      div3 = element("div");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      i_1 = element("i");
      t2 = space();
      div2 = element("div");
      h3 = element("h3");
      t3 = text(t3_value);
      t4 = space();
      p = element("p");
      t5 = text(t5_value);
      t6 = space();
      button = element("button");
      a = element("a");
      t7 = text("Contratar");
      t8 = space();
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {});
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true,
        style: true
      });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, t0_value);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      i_1 = claim_element(div1_nodes, "I", {
        class: true
      });
      children(i_1).forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t2 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      h3 = claim_element(div2_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t3 = claim_text(h3_nodes, t3_value);
      h3_nodes.forEach(detach_dev);
      t4 = claim_space(div2_nodes);
      p = claim_element(div2_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t5 = claim_text(p_nodes, t5_value);
      p_nodes.forEach(detach_dev);
      t6 = claim_space(div2_nodes);
      button = claim_element(div2_nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      a = claim_element(button_nodes, "A", {
        href: true
      });
      var a_nodes = children(a);
      t7 = claim_text(a_nodes, "Contratar");
      a_nodes.forEach(detach_dev);
      button_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t8 = claim_space(div4_nodes);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "service-count svelte-12aobov");
      add_location(div0, file, 69, 10, 2543);
      attr_dev(i_1, "class", "" + (null_to_empty(
      /*e*/
      ctx[1].icon) + " svelte-12aobov"));
      add_location(i_1, file, 73, 12, 2660);
      attr_dev(div1, "class", "service-icon svelte-12aobov");
      add_location(div1, file, 72, 10, 2621);
      attr_dev(h3, "class", "title svelte-12aobov");
      add_location(h3, file, 76, 12, 2750);
      attr_dev(p, "class", "description svelte-12aobov");
      add_location(p, file, 79, 12, 2823);
      attr_dev(a, "href", ".");
      add_location(a, file, 85, 14, 3097);
      attr_dev(button, "class", "p-2 rounded-lg font-sans transition duration-1000 ease-in-out bg-green-900 transform hover:-translate-y-1 hover:scale-105 text-white");
      add_location(button, file, 82, 12, 2906);
      attr_dev(div2, "class", "service-content svelte-12aobov");
      add_location(div2, file, 75, 10, 2708);
      attr_dev(div3, "class", "serviceBox quatro svelte-12aobov");
      set_style(div3, "--my-color-var", "linear-gradient(45deg, " +
      /*e*/
      ctx[1].gradientBack + " 49%, transparent 50%)");
      add_location(div3, file, 65, 8, 2385);
      add_location(div4, file, 64, 6, 2371);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, div3);
      append_dev(div3, div0);
      append_dev(div0, t0);
      append_dev(div3, t1);
      append_dev(div3, div1);
      append_dev(div1, i_1);
      append_dev(div3, t2);
      append_dev(div3, div2);
      append_dev(div2, h3);
      append_dev(h3, t3);
      append_dev(div2, t4);
      append_dev(div2, p);
      append_dev(p, t5);
      append_dev(div2, t6);
      append_dev(div2, button);
      append_dev(button, a);
      append_dev(a, t7);
      append_dev(div4, t8);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(64:4) {#each test as e, i}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div1;
  var div0;
  var each_value =
  /*test*/
  ctx[0];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div0_nodes);
      }

      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4");
      add_location(div0, file, 60, 2, 2251);
      attr_dev(div1, "class", "container mx-auto");
      add_location(div1, file, 59, 0, 2217);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div0, null);
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*test*/
      1) {
        each_value =
        /*test*/
        ctx[0];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(div0, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("ServicesBox", slots, []);
  var test = [{
    cor: "bg-gradient-to-r from-green-700 to-green-600",
    icon: "fas fa-desktop",
    gradientBack: "#047857",
    number: "1",
    title: "Criação de Sites Institucionais",
    description: "Utilize a força da internet para expor sua marca para milhares de pessoas online. Criamos sites com alta qualidade, beleza e últimas tecnologias."
  }, {
    cor: "bg-gradient-to-r from-blue-600 to-blue-500",
    icon: "fas fa-shopping-cart",
    gradientBack: "#2563EB",
    number: "2",
    title: "Lojas Virtuais e-Commerces",
    description: "Utilize a força da internet para aumentar suas vendas. Criamos lojas virtuais para que você possa realizar todas suas vendas 100% online."
  }, {
    cor: "bg-gradient-to-r from-green-500 to-green-400",
    icon: "fas fa-globe-africa",
    gradientBack: "#10B981",
    number: "3",
    title: "Sistemas On-line",
    description: "Está precisando de algum sistema online específico? Seja ele para aumentar sua produtividade, fazer gestão de vendas, etc... Faça um orçamento!"
  }, {
    cor: "bg-gradient-to-r from-blue-700 to-blue-600",
    icon: "fas fa-comment",
    gradientBack: "#1D4ED8",
    number: "4",
    title: "Gestão de Conteúdos",
    description: "Já possui algum site online e gostaria de atualizar o seu conteúdo? Nós também atualizamos os sites que já estão online e precisam de manutenção!"
  }, {
    cor: "bg-gradient-to-r from-green-600 to-green-500",
    icon: "fas fa-chart-line",
    gradientBack: "#10B981",
    number: "5",
    title: "SEO Otimização",
    description: "Tenha seu site otimizado para os maiores buscadores online como Google e Bing e faça a sua marca ficar em\tevidencia nas buscas da internet"
  }, {
    cor: "bg-gradient-to-r from-blue-500 to-blue-400",
    icon: "fas fa-robot",
    gradientBack: "#3B82F6",
    number: "6",
    title: "Manutenção e Automação",
    description: "Quer fazer algum tipo de auteração no seu site ou alguma automação? Possuímos a expertise necessária para realizar o serviço para você."
  }];
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ServicesBox> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      test: test
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("test" in $$props) $$invalidate(0, test = $$props.test);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [test];
}

var ServicesBox = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(ServicesBox, _SvelteComponentDev);

  var _super = _createSuper(ServicesBox);

  function ServicesBox(options) {
    var _this;

    _classCallCheck(this, ServicesBox);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ServicesBox",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return ServicesBox;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/routes/index.svelte";

function create_fragment$1(ctx) {
  var t0;
  var h1;
  var t1;
  var t2;
  var servicesbox;
  var current;
  servicesbox = new ServicesBox({
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text("Serviços prestados");
      t2 = space();
      create_component(servicesbox.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1031zqi\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Serviços prestados");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      claim_component(servicesbox.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      document.title = "MZ Developer!!!";
      attr_dev(h1, "class", "svelte-1wdao89");
      add_location(h1, file$1, 8, 0, 143);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      mount_component(servicesbox, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(servicesbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(servicesbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      destroy_component(servicesbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Routes", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      ServicesBox: ServicesBox
    };
  };

  return [];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper$1(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
