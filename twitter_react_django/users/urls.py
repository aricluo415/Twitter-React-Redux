from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'', views.UserListView, base_name="users")
urlpatterns = router.urls
# urlpatterns = [
#    path('', views.UserListView.as_view())
# ]
