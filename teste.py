import socket

def testar_porta_mysql(ip, porta):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(5)  # tempo limite de 5 segundos
    try:
        s.connect((ip, porta))
        print(f"Conexão bem-sucedida: IP {ip}, Porta {porta} está aberta.")
    except (socket.timeout, ConnectionRefusedError):
        print(f"Não foi possível conectar: IP {ip}, Porta {porta} está fechada ou inacessível.")
    finally:
        s.close()

# Testar a porta do MySQL no IP especificado
ip_mysql = "157.230.224.194"
porta_mysql = 3306

testar_porta_mysql(ip_mysql, porta_mysql)
