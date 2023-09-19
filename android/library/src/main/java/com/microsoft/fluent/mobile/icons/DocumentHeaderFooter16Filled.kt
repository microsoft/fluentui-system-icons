package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentHeaderFooter16: ImageVector
  get() {
    if (_documentHeaderFooter16 != null) {
      return _documentHeaderFooter16!!
    }
    _documentHeaderFooter16 = fluentIcon(name = "Filled.DocumentHeaderFooter16", 16f) {
      materialPath {
          moveTo(3.0F, 2.75F)
          curveTo(3.0F, 1.784F, 3.784F, 1.0F, 4.75F, 1.0F)
          horizontalLineToRelative(6.5F)
          curveTo(12.216F, 1.0F, 13.0F, 1.784F, 13.0F, 2.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-6.5F)
          curveTo(3.784F, 15.0F, 3.0F, 14.216F, 3.0F, 13.25F)
          verticalLineTo(2.75F)
          close()
          moveTo(6.0F, 3.0F)
          curveTo(5.448F, 3.0F, 5.0F, 3.448F, 5.0F, 4.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(0.0F, 8.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(6.0F)
          close()        
      }
    }
    return _documentHeaderFooter16!!
  }

private var _documentHeaderFooter16: ImageVector? = null
