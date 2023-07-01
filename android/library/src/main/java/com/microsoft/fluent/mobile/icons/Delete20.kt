package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Delete20: ImageVector
  get() {
    if (_delete20 != null) {
      return _delete20!!
    }
    _delete20 = fluentIcon(name = "Regular.Delete20", 20f) {
      materialPath {
          moveTo(8.5F, 4.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          reflectiveCurveTo(8.5F, 3.172F, 8.5F, 4.0F)
          close()
          moveToRelative(-1.0F, 0.0F)
          curveToRelative(0.0F, -1.38F, 1.12F, -2.5F, 2.5F, -2.5F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          horizontalLineToRelative(5.0F)
          curveTo(17.776F, 4.0F, 18.0F, 4.224F, 18.0F, 4.5F)
          reflectiveCurveTo(17.776F, 5.0F, 17.5F, 5.0F)
          horizontalLineToRelative(-1.054F)
          lineToRelative(-1.194F, 10.344F)
          curveTo(15.077F, 16.858F, 13.796F, 18.0F, 12.272F, 18.0F)
          horizontalLineTo(7.728F)
          curveToRelative(-1.524F, 0.0F, -2.805F, -1.142F, -2.98F, -2.656F)
          lineTo(3.554F, 5.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 5.0F, 2.0F, 4.776F, 2.0F, 4.5F)
          reflectiveCurveTo(2.224F, 4.0F, 2.5F, 4.0F)
          horizontalLineToRelative(5.0F)
          close()
          moveTo(5.741F, 15.23F)
          curveTo(5.858F, 16.237F, 6.712F, 17.0F, 7.728F, 17.0F)
          horizontalLineToRelative(4.544F)
          curveToRelative(1.016F, 0.0F, 1.87F, -0.762F, 1.987F, -1.77F)
          lineTo(15.439F, 5.0F)
          horizontalLineTo(4.561F)
          lineToRelative(1.18F, 10.23F)
          close()
          moveTo(8.5F, 7.5F)
          curveTo(8.776F, 7.5F, 9.0F, 7.724F, 9.0F, 8.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(8.0F, 14.276F, 8.0F, 14.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          close()
          moveTo(12.0F, 8.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(11.0F, 7.724F, 11.0F, 8.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(12.0F, 14.276F, 12.0F, 14.0F)
          verticalLineTo(8.0F)
          close()        
      }
    }
    return _delete20!!
  }

private var _delete20: ImageVector? = null
