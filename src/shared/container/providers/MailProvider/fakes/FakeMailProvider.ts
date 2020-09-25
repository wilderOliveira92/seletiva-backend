import IMailProvider from '../models/IMailProvider';
import ISendEmailDTO from '../dtos/ISendEmailDTO';

export default class FakeMailProvider implements IMailProvider {
  private messages: ISendEmailDTO[] = [];

  public async sendEmail(message: ISendEmailDTO): Promise<void> {
    this.messages.push(message);
  }
}
