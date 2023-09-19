package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageCircle28: ImageVector
  get() {
    if (_imageCircle28 != null) {
      return _imageCircle28!!
    }
    _imageCircle28 = fluentIcon(name = "Filled.ImageCircle28", 28f) {
      materialPath {
          moveTo(14.0F, 2.0F)
          curveTo(7.373F, 2.0F, 2.0F, 7.373F, 2.0F, 14.0F)
          curveToRelative(0.0F, 3.052F, 1.14F, 5.838F, 3.016F, 7.956F)
          lineToRelative(7.588F, -7.4F)
          curveToRelative(0.777F, -0.757F, 2.016F, -0.757F, 2.792F, 0.0F)
          lineToRelative(7.588F, 7.4F)
          curveTo(24.861F, 19.838F, 26.0F, 17.052F, 26.0F, 14.0F)
          curveToRelative(0.0F, -6.627F, -5.373F, -12.0F, -12.0F, -12.0F)
          close()
          moveToRelative(7.921F, 21.014F)
          lineToRelative(-7.572F, -7.383F)
          curveToRelative(-0.194F, -0.19F, -0.504F, -0.19F, -0.698F, 0.0F)
          lineToRelative(-7.572F, 7.383F)
          curveTo(8.192F, 24.873F, 10.964F, 26.0F, 14.0F, 26.0F)
          curveToRelative(3.035F, 0.0F, 5.808F, -1.127F, 7.921F, -2.986F)
          close()
          moveTo(20.5F, 9.75F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          reflectiveCurveTo(16.0F, 10.993F, 16.0F, 9.75F)
          reflectiveCurveToRelative(1.007F, -2.25F, 2.25F, -2.25F)
          reflectiveCurveToRelative(2.25F, 1.007F, 2.25F, 2.25F)
          close()        
      }
    }
    return _imageCircle28!!
  }

private var _imageCircle28: ImageVector? = null
