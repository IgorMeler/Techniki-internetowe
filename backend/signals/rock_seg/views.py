from rest_framework.views import APIView
from django.http import HttpResponse
from django.core.files.storage import default_storage
from .seg_sandstone.segmentation import Sandstone


class TestAPIView(APIView):

    def post(self, request):
        filename = "client_img.jpg"
        image = request.FILES.get("inpFile")
        with default_storage.open('rock_seg/seg_sandstone/' + filename, 'wb+') as destination:
            for chunk in image.chunks():
                destination.write(chunk)

        s = Sandstone('rock_seg/seg_sandstone/client_img.jpg')
        s.predict()
        return HttpResponse("OK", content_type="text/plain")

    def get(self, request):
        try:
            with open("rock_seg/seg_sandstone/result.jpg", "rb") as f:
                return HttpResponse(f.read(), content_type="image/jpeg")
        except IOError:
            return HttpResponse("INVALID FORMAT", content_type="text/plain")
