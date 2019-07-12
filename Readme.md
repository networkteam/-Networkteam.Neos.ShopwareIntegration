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
