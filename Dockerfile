FROM php:8.2-apache

# Extensiones necesarias
RUN docker-php-ext-install mysqli pdo pdo_mysql && a2enmod rewrite

# Script de arranque inline (usa /bin/sh, no bash)
RUN printf '#!/bin/sh\nset -e\n: "${PORT:=10000}"\n'\
'sed -ri "s/Listen 80/Listen ${PORT}/" /etc/apache2/ports.conf\n'\
'sed -ri "s/:80>/:${PORT}>/" /etc/apache2/sites-available/000-default.conf\n'\
'exec apache2-foreground\n' > /usr/local/bin/run.sh \
 && chmod +x /usr/local/bin/run.sh

# Copia tu app
COPY . /var/www/html/

ENV PORT=10000
EXPOSE 10000

CMD ["run.sh"]