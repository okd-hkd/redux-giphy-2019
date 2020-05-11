report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/okada_giphy001_giphy_0_document_0_tablet.png",
        "test": "../bitmaps_test/20200510-165202/okada_giphy001_giphy_0_document_0_tablet.png",
        "selector": "document",
        "fileName": "okada_giphy001_giphy_0_document_0_tablet.png",
        "label": "giphy",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/okada_giphy001_giphy_0_document_1_desktop.png",
        "test": "../bitmaps_test/20200510-165202/okada_giphy001_giphy_0_document_1_desktop.png",
        "selector": "document",
        "fileName": "okada_giphy001_giphy_0_document_1_desktop.png",
        "label": "giphy",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "okada_giphy001"
});