from api.follows.views import FollowsViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', FollowsViewSet, base_name='follows')
urlpatterns = router.urls
