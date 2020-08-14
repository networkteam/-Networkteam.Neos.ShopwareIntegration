<?php
namespace Networkteam\Neos\ShopwareIntegration\Fusion;


use Neos\Flow\Annotations as Flow;
use GuzzleHttp\Client as GuzzleClient;
use GuzzleHttp\Exception\GuzzleException;
use phpDocumentor\Reflection\Types\This;
use Psr\Http\Message\ResponseInterface;
use Neos\Neos\Domain\Exception;
use Neos\Utility\Arrays;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Fusion\FusionObjects\AbstractFusionObject;

class SalutationDataImplementation extends AbstractFusionObject
{
    /**
     * @var GuzzleClient
     */
    private $guzzle;

    /**
     * @Flow\InjectConfiguration(package="Networkteam.Neos.ShopwareIntegration")
     * @var array
     */
    protected $shopwareSettings;

    /**
     * Replace Placeholders of a product
     *
     * @return array
     * @throws Exception
     */
    public function evaluate()
    {
        $this->guzzle = new GuzzleClient([
            'base_uri' => $this->shopwareSettings['api'],
            'headers' => [
                'Accept' => 'application/json',
                'SW-Access-Key' => $this->shopwareSettings['key']
            ]
        ]);

        try {
            $response = $this->guzzle->request('GET', 'sales-channel-api/v3/salutation');
        } catch (GuzzleException $exception) {
            throw new \RuntimeException(sprintf('Uri Getter: %s', $exception->getMessage()), 1560856269, $exception);
        }


        $salutations = [];
        foreach ($this->parseJsonResponse($response)['data'] as $salutation) {


            $salutations[] = [
                "id" => $salutation["id"],
                "title" => $salutation["displayName"],
            ];
        }

        return $salutations;
    }

    private function parseJsonResponse(ResponseInterface $response): array
    {
        $responseBody = $response->getBody()->getContents();
        $responseData = json_decode($responseBody, true);
        if ($responseData === null) {
            throw new \RuntimeException(sprintf('Error decoding response from EMS endpoint: %s (%d)', json_last_error_msg(), json_last_error()), 1558971370);
        }
        return $responseData;
    }

    private function getSalutationsMap()
    {

    }
}
