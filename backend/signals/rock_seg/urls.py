from django.urls import path
from .views import TestAPIView

urlpatterns = [
    path('signal/test', TestAPIView.as_view()),
]
