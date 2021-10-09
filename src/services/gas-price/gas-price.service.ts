import ConfigService from '../config/config.service';
import PolygonProvider from './providers/polygon.provider';
import { GasPrice } from './providers/types';

export default class GasPriceService {
  constructor(
    private readonly configService = new ConfigService(),
    private readonly polygonProvider = new PolygonProvider()
  ) {}

  public async getLatest(): Promise<GasPrice | null> {
    switch (this.configService.network.key) {
      case '137':
        return await this.polygonProvider.getLatest();
      default:
        return null;
    }
  }
}
