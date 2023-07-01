package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Image32: ImageVector
  get() {
    if (_image32 != null) {
      return _image32!!
    }
    _image32 = fluentIcon(name = "Filled.Image32", 32f) {
      materialPath {
          moveTo(7.5F, 3.0F)
          curveTo(5.015F, 3.0F, 3.0F, 5.015F, 3.0F, 7.5F)
          verticalLineToRelative(17.0F)
          curveToRelative(0.0F, 0.849F, 0.235F, 1.643F, 0.644F, 2.32F)
          lineToRelative(10.588F, -10.588F)
          curveToRelative(0.977F, -0.976F, 2.56F, -0.976F, 3.536F, 0.0F)
          lineToRelative(10.588F, 10.589F)
          curveTo(28.765F, 26.143F, 29.0F, 25.349F, 29.0F, 24.5F)
          verticalLineToRelative(-17.0F)
          curveTo(29.0F, 5.015F, 26.985F, 3.0F, 24.5F, 3.0F)
          horizontalLineToRelative(-17.0F)
          close()
          moveToRelative(17.0F, 8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          close()
          moveToRelative(2.47F, 17.262F)
          lineTo(16.354F, 17.646F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineTo(5.03F, 28.262F)
          curveTo(5.74F, 28.73F, 6.588F, 29.0F, 7.5F, 29.0F)
          horizontalLineToRelative(17.0F)
          curveToRelative(0.912F, 0.0F, 1.76F, -0.271F, 2.47F, -0.738F)
          close()        
      }
    }
    return _image32!!
  }

private var _image32: ImageVector? = null
