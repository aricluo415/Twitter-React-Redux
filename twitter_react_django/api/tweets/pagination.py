from rest_framework.pagination import PageNumberPagination


class TweetPageNumberPagination(PageNumberPagination):
    page_size = 10
