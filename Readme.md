# Networkteam Neos ShopwareIntegration

## Basic Configuration

To use the data coming from shopware, you need to set some configuration in your `Settings.yaml`

``` yaml
Networkteam:
  Neos:
    ShopwareIntegration:
      api: '<The base url of your shopware shop>'
      key: '<The Api Key for your shopware shop>'
```

## Available Mixins

*Networkteam.Neos.ShopwareIntegration:Mixin.ProductId*

Can be used to connect a Node to a Shopware Product. The dropdown shows all Products coming from your shopware installation.

*Networkteam.Neos.ShopwareIntegration:Mixin.CategoryId*
Can be used to connect a Node to a Shopware Category. The dropdown shows all categories coming from your shopware installation.

## Product List

To get an array of all products in a category use the Networkteam.Neos.ShopwareIntegration:ProductsByCategory Prototype and set the category id

```
prototype(Vendor.Site:Page) {
    productList = Neos.Fusion:Loop {
        items = Networkteam.Neos.ShopwareIntegration:ProductsByCategory {
            categoryId = <Your category id>
        }
        renderer = <Your product renderer>
    }
}
```

## Product Data

To get an array of product data by id use the Networkteam.Neos.ShopwareIntegration:ProductData Prototype and set the product id

```
prototype(Vendor.Site:Page) {
    productData = Networkteam.Neos.ShopwareIntegration:ProductData {
        productId = <Your product id>
    }
}
```

## Category Data

To get an array of category data by id use the Networkteam.Neos.ShopwareIntegration:CategoryData Prototype and set the category id

```
prototype(Vendor.Site:Page) {
    categoryData = Networkteam.Neos.ShopwareIntegration:ProductData {
        categoryId = <Your category id>
    }
}
```

## Placeholder

You can use placeholder to add data from your shopware instance.

### Product Placeholder
The product placeholders have the format `{{shopware.product.<data-path>}}`

To enrich the placeholders with data, add the Networkteam.Neos.ShopwareIntegration:ProductPlaceholder-Prototype as a processor and set the product id

```
prototype(Vendor.Site:Page) {
    @process.enrichPlaceholder = Networkteam.Neos.ShopwareIntegration:ProductPlaceholder {
        productId = <Your product id>
    }
}
```

### Category Placeholder
The category placeholders have the format `{{shopware.category.<data-path>}}`

To enrich the placeholders with data, add the Networkteam.Neos.ShopwareIntegration:CategoryPlaceholder-Prototype as a processor and set the category id

```
prototype(Vendor.Site:Page) {
    @process.enrichPlaceholder = Networkteam.Neos.ShopwareIntegration:CategoryPlaceholder {
        categoryId = <Your product id>
    }
}
```

## ShopwareRuntime
You can use a ShopwareRuntime in your own Javascript. It is a global umd module and can be accessed as `window.ShopwareRuntime`. Alternatively you can use it as an external module your build process, e.g. in webpack 5:

```
externals: {
    'shopware-connector': {
        root: ['ShopwareRuntime', 'ShopwareConnector'],
        commonjs: ['ShopwareRuntime', 'ShopwareConnector'],
        commonjs2: ['ShopwareRuntime', 'ShopwareConnector'],
    },
}
```

To use the Runtime, add the corresponding Javascript to your page, e.g. by adding `Networkteam.Neos.ShopwareIntegration:Shopware.Widgets.Js` to your scripts


## Widgets (require ShopwareRuntime JS)
To use the widgets provided with the function and a minimum of markup add the corresponding javascript to your page. Just add `Networkteam.Neos.ShopwareIntegration:Shopware.Widgets.Js` to your scripts.

### AddToBasket Widget
This widget is just a wrapper, that enhances your Markup with a Click Listener and the function to add an Element to the basket. You just need to datt two data-attributes to your existing markup:

```
<button data-component="AddToBasket" data-prop-product-id="SomeID">TestButton</button>
```
