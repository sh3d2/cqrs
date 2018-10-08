import { ICommand } from './command.interface';
import { ICommandHandlerResult } from './command-handler-result.interface';

export interface ICommandHandler<T extends ICommand> {
    execute<R extends ICommandHandlerResult>(command: T): Promise<R>;
}
