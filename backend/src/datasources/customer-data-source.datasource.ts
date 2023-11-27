import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'customerDataSource',
  connector: 'mongodb',
  url: process.env.MONGODBURL || 'mongodb+srv://sadeepa:sadeepa123@studentmanagement.in6etp1.mongodb.net/customer?retryWrites=true&w=majority',
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'customer-test-db',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CustomerDataSourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'customerDataSource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.customerDataSource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
