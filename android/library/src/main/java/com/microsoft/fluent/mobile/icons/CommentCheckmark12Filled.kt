package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CommentCheckmark12: ImageVector
  get() {
    if (_commentCheckmark12 != null) {
      return _commentCheckmark12!!
    }
    _commentCheckmark12 = fluentIcon(name = "Filled.CommentCheckmark12", 12f) {
      materialPath {
          moveTo(12.0F, 3.5F)
          curveTo(12.0F, 5.433F, 10.433F, 7.0F, 8.5F, 7.0F)
          reflectiveCurveTo(5.0F, 5.433F, 5.0F, 3.5F)
          reflectiveCurveTo(6.567F, 0.0F, 8.5F, 0.0F)
          reflectiveCurveTo(12.0F, 1.567F, 12.0F, 3.5F)
          close()
          moveToRelative(-1.646F, -1.353F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.707F, 0.0F)
          lineTo(8.0F, 3.792F)
          lineTo(7.354F, 3.146F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()
          moveTo(8.5F, 8.0F)
          curveToRelative(0.918F, 0.0F, 1.772F, -0.275F, 2.484F, -0.747F)
          curveTo(10.86F, 8.238F, 10.02F, 9.0F, 9.0F, 9.0F)
          horizontalLineTo(6.651F)
          lineToRelative(-2.874F, 1.916F)
          curveToRelative(-0.153F, 0.102F, -0.35F, 0.112F, -0.513F, 0.025F)
          curveTo(3.102F, 10.854F, 3.0F, 10.684F, 3.0F, 10.5F)
          verticalLineTo(9.0F)
          curveTo(1.895F, 9.0F, 1.0F, 8.105F, 1.0F, 7.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(1.758F)
          curveTo(4.279F, 1.715F, 4.0F, 2.575F, 4.0F, 3.5F)
          curveTo(4.0F, 5.985F, 6.015F, 8.0F, 8.5F, 8.0F)
          close()        
      }
    }
    return _commentCheckmark12!!
  }

private var _commentCheckmark12: ImageVector? = null
