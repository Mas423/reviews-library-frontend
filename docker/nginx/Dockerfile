FROM nginx:1.21.4
# TimeZoneをAsia/Tokyoに設定する
ENV TZ Asia/Tokyo
RUN echo "${TZ}" > /etc/timezone \
   && dpkg-reconfigure -f noninteractive tzdata

EXPOSE ${NGINX_PORT}

# confに環境変数を適用
ENTRYPOINT /bin/sh -c "envsubst '\$NGINX_HOST \$NGINX_PORT'< /etc/nginx/templates/default.conf > /etc/nginx/conf.d/default.conf" && \
    /usr/sbin/nginx -g "daemon off;"