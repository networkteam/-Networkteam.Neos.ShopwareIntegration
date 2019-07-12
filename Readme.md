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

Can be used to connect a Node to a Shopware Product The dropdown showas all Products coming from your shopware installation.

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

```

```
