#!/usr/bin/env bash
set -e

# Sustituir $PORT en los templates de Apache
envsubst '${PORT}' < /etc/apache2/ports.conf.template > /etc/apache2/ports.conf
envsubst '${PORT}' < /etc/apache2/sites-available/000-default.conf.template > /etc/apache2/sites-available/000-default.conf

# Asegurar AllowOverride por si usas .htaccess (opcional)
if ! grep -q "AllowOverride All" /etc/apache2/apache2.conf; then
  sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf || true
fi

exec "$@"
