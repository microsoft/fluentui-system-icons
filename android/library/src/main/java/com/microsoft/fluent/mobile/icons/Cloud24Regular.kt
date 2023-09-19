package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Cloud24: ImageVector
  get() {
    if (_cloud24 != null) {
      return _cloud24!!
    }
    _cloud24 = fluentIcon(name = "Regular.Cloud24", 24f) {
      materialPath {
          moveTo(12.0F, 5.5F)
          curveToRelative(-2.413F, 0.0F, -4.383F, 1.9F, -4.495F, 4.285F)
          curveToRelative(-0.019F, 0.4F, -0.349F, 0.715F, -0.75F, 0.715F)
          horizontalLineTo(6.5F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineToRelative(-0.256F)
          curveToRelative(-0.4F, 0.0F, -0.73F, -0.315F, -0.749F, -0.715F)
          curveTo(16.383F, 7.4F, 14.413F, 5.5F, 12.0F, 5.5F)
          close()
          moveTo(6.08F, 9.02F)
          curveTo(6.548F, 6.171F, 9.02F, 4.0F, 12.0F, 4.0F)
          reflectiveCurveToRelative(5.452F, 2.172F, 5.92F, 5.02F)
          curveTo(20.208F, 9.23F, 22.0F, 11.155F, 22.0F, 13.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(4.015F, 18.0F, 2.0F, 15.985F, 2.0F, 13.5F)
          curveToRelative(0.0F, -2.344F, 1.792F, -4.269F, 4.08F, -4.48F)
          close()        
      }
    }
    return _cloud24!!
  }

private var _cloud24: ImageVector? = null
