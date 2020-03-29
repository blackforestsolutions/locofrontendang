FROM nginx
COPY nginx/default.conf /etc/nginx/conf.d
COPY dist/locofrontendang /usr/share/nginx/html
