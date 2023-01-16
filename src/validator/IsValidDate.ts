import { Logger } from '@nestjs/common';
import {
  buildMessage,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';
import * as moment from 'moment';

const logger: Logger = new Logger('Validator');

export function isValidDate(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsValidFullDate',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string) {
          if (value === 'today')
            value = moment(new Date()).format('YYYY-MM-DD');
          logger.debug('IsValidFullDate', value);

          return moment(value, 'YYYY-MM-DD', true).isValid();
        },
        defaultMessage: buildMessage(
          (eachPrefix) => eachPrefix + `$property is invalid`,
          validationOptions,
        ),
      },
    });
  };
}
