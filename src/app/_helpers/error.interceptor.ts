import { AuthenticationService } from '../_service/authentication.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    //Injeção de dependencia do serviço de autenticação
    //Usado para dar logout no usuário caso o erro 401 (não autorizado) seja emitido
    constructor(private authenticationService: AuthenticationService) {}

    //Intercepta todos os erros de HTTP que podem ser enviados pelos próximos handlers
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //next.handle envia o request para o o próximo gerenciador e se receber erro, executa o código
        //pipe cria a lista de execução de tratamento do resultado
        //Nesse caso, apenas o catchError
        return next.handle(request).pipe(catchError(err => {
            //Se o erro tem codigo 401 (não auctorizado)
            if (err.status === 401) {
                //Realiza o logout da pessoa e atualiza a página
                this.authenticationService.logout();
                //Atualiza a página
                //A página atualizada enviará a pessoa para a página de login
                location.reload(true);
            }
            //Outros erros, retorna o texto do erro na resposta (body) ou o nome do código recebido
            const error = err.error || err.statusText;
            return throwError(error);
        }))
    }
}