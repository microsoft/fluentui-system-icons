package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DocumentHeader16: ImageVector
  get() {
    if (_documentHeader16 != null) {
      return _documentHeader16!!
    }
    _documentHeader16 = fluentIcon(name = "Regular.DocumentHeader16", 16f) {
      materialPath {
          moveTo(6.0F, 3.0F)
          curveTo(5.448F, 3.0F, 5.0F, 3.448F, 5.0F, 4.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(6.0F)
          close()
          moveTo(4.75F, 1.0F)
          curveTo(3.784F, 1.0F, 3.0F, 1.784F, 3.0F, 2.75F)
          verticalLineToRelative(10.5F)
          curveTo(3.0F, 14.216F, 3.784F, 15.0F, 4.75F, 15.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(2.75F)
          curveTo(13.0F, 1.784F, 12.216F, 1.0F, 11.25F, 1.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveTo(4.0F, 2.75F)
          curveTo(4.0F, 2.336F, 4.336F, 2.0F, 4.75F, 2.0F)
          horizontalLineToRelative(6.5F)
          curveTo(11.664F, 2.0F, 12.0F, 2.336F, 12.0F, 2.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-6.5F)
          curveTo(4.336F, 14.0F, 4.0F, 13.664F, 4.0F, 13.25F)
          verticalLineTo(2.75F)
          close()        
      }
    }
    return _documentHeader16!!
  }

private var _documentHeader16: ImageVector? = null
