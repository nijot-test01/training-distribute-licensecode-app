export var amplify_config = {
    API: {
        endpoints: [{
            name: 'LicenseCodeDistributorAPI',
            endpoint: 'https://b49f7n0wjh.execute-api.ap-northeast-1.amazonaws.com/prod', // API Gateway Endpoint. such as https://abcdefghij.execute-api.us-west-2.amazonaws.com/prod
            region: 'ap-northeast-1' // Amazon service region
        }]
    }
};

export default amplify_config;