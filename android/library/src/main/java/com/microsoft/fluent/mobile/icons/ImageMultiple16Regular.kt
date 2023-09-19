package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ImageMultiple16: ImageVector
  get() {
    if (_imageMultiple16 != null) {
      return _imageMultiple16!!
    }
    _imageMultiple16 = fluentIcon(name = "Regular.ImageMultiple16", 16f) {
      materialPath {
          moveTo(10.0F, 5.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveTo(8.0F, 5.552F, 8.0F, 5.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(5.0F)
          curveTo(2.0F, 10.88F, 3.12F, 12.0F, 4.5F, 12.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-5.0F)
          curveTo(12.0F, 3.12F, 10.88F, 2.0F, 9.5F, 2.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(3.0F, 4.5F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(5.0F)
          curveTo(10.328F, 3.0F, 11.0F, 3.672F, 11.0F, 4.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.232F, -0.053F, 0.45F, -0.146F, 0.647F)
          lineTo(8.209F, 7.502F)
          curveToRelative(-0.668F, -0.668F, -1.75F, -0.668F, -2.418F, 0.0F)
          lineToRelative(-2.645F, 2.645F)
          curveTo(3.053F, 9.95F, 3.0F, 9.732F, 3.0F, 9.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveToRelative(0.853F, 6.354F)
          lineToRelative(2.645F, -2.645F)
          curveToRelative(0.277F, -0.277F, 0.727F, -0.277F, 1.004F, 0.0F)
          lineToRelative(2.645F, 2.645F)
          curveTo(9.95F, 10.948F, 9.732F, 11.0F, 9.5F, 11.0F)
          horizontalLineToRelative(-5.0F)
          curveToRelative(-0.232F, 0.0F, -0.45F, -0.053F, -0.647F, -0.146F)
          close()
          moveTo(7.0F, 14.0F)
          curveToRelative(-0.818F, 0.0F, -1.544F, -0.393F, -2.0F, -1.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineTo(4.0F)
          curveToRelative(0.607F, 0.456F, 1.0F, 1.182F, 1.0F, 2.0F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineTo(7.0F)
          close()        
      }
    }
    return _imageMultiple16!!
  }

private var _imageMultiple16: ImageVector? = null
