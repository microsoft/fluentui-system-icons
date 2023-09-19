package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ImageStack16: ImageVector
  get() {
    if (_imageStack16 != null) {
      return _imageStack16!!
    }
    _imageStack16 = fluentIcon(name = "Regular.ImageStack16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(13.0F, 7.0F)
          horizontalLineToRelative(-2.293F)
          lineToRelative(-1.47F, -1.47F)
          curveToRelative(-0.683F, -0.683F, -1.791F, -0.683F, -2.474F, 0.0F)
          lineTo(5.293F, 7.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(4.5F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.328F, 3.0F, 13.0F, 3.672F, 13.0F, 4.5F)
          verticalLineTo(7.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 0.762F, -0.569F, 1.392F, -1.305F, 1.488F)
          lineTo(9.237F, 10.53F)
          curveToRelative(-0.683F, -0.683F, -1.791F, -0.683F, -2.474F, 0.0F)
          lineToRelative(-2.458F, 2.458F)
          curveTo(3.57F, 12.892F, 3.0F, 12.262F, 3.0F, 11.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(10.0F)
          close()
          moveTo(9.293F, 7.0F)
          horizontalLineTo(6.707F)
          lineTo(7.47F, 6.237F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(9.293F, 7.0F)
          close()
          moveTo(8.53F, 11.237F)
          lineTo(10.293F, 13.0F)
          horizontalLineTo(5.707F)
          lineToRelative(1.763F, -1.763F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          close()
          moveTo(12.0F, 4.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(10.5F, 5.164F, 10.5F, 4.75F)
          reflectiveCurveTo(10.836F, 4.0F, 11.25F, 4.0F)
          reflectiveCurveTo(12.0F, 4.336F, 12.0F, 4.75F)
          close()
          moveToRelative(-0.75F, 5.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(11.664F, 9.0F, 11.25F, 9.0F)
          reflectiveCurveTo(10.5F, 9.336F, 10.5F, 9.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          close()        
      }
    }
    return _imageStack16!!
  }

private var _imageStack16: ImageVector? = null
