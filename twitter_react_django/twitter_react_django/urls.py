from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

urlpatterns = [

    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),
    path('api/', include('api.urls')),
    path('connected/', lambda request: HttpResponse("connected"))
    #url(r'^admin/', admin.site.urls),
    #url(r'^users/', include('users.urls'))

]
