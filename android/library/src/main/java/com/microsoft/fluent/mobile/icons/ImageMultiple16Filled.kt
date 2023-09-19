package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageMultiple16: ImageVector
  get() {
    if (_imageMultiple16 != null) {
      return _imageMultiple16!!
    }
    _imageMultiple16 = fluentIcon(name = "Filled.ImageMultiple16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.51F, 0.152F, 0.983F, 0.414F, 1.378F)
          lineToRelative(3.377F, -3.376F)
          curveToRelative(0.668F, -0.668F, 1.75F, -0.668F, 2.418F, 0.0F)
          lineToRelative(3.377F, 3.377F)
          curveTo(11.848F, 10.483F, 12.0F, 10.009F, 12.0F, 9.5F)
          verticalLineToRelative(-5.0F)
          curveTo(12.0F, 3.12F, 10.88F, 2.0F, 9.5F, 2.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(10.0F, 5.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveTo(8.0F, 5.552F, 8.0F, 5.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveToRelative(0.879F, 6.586F)
          lineTo(7.502F, 8.209F)
          curveToRelative(-0.277F, -0.277F, -0.727F, -0.277F, -1.004F, 0.0F)
          lineTo(3.12F, 11.586F)
          curveTo(3.516F, 11.847F, 3.991F, 12.0F, 4.5F, 12.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.51F, 0.0F, 0.983F, -0.152F, 1.379F, -0.414F)
          close()
          moveTo(4.999F, 13.0F)
          curveToRelative(0.457F, 0.607F, 1.183F, 1.0F, 2.0F, 1.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(2.486F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.818F, -0.392F, -1.544F, -1.0F, -2.0F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 1.933F, -1.566F, 3.5F, -3.5F, 3.5F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _imageMultiple16!!
  }

private var _imageMultiple16: ImageVector? = null
