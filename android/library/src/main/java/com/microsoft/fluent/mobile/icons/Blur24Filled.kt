package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Blur24: ImageVector
  get() {
    if (_blur24 != null) {
      return _blur24!!
    }
    _blur24 = fluentIcon(name = "Filled.Blur24", 24f) {
      materialPath {
          moveTo(3.0F, 12.0F)
          curveToRelative(0.0F, -4.97F, 4.03F, -9.0F, 9.0F, -9.0F)
          curveToRelative(1.84F, 0.0F, 3.551F, 0.552F, 4.977F, 1.5F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(6.225F)
          curveToRelative(0.472F, 0.452F, 0.895F, 0.955F, 1.26F, 1.5F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(8.064F)
          curveToRelative(0.238F, 0.477F, 0.434F, 0.979F, 0.584F, 1.5F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(8.876F)
          curveTo(20.957F, 10.988F, 21.0F, 11.489F, 21.0F, 12.0F)
          horizontalLineToRelative(-9.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(8.945F)
          curveToRelative(-0.057F, 0.514F, -0.157F, 1.015F, -0.297F, 1.5F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(8.294F)
          curveToRelative(-0.223F, 0.528F, -0.495F, 1.03F, -0.81F, 1.5F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(6.708F)
          curveToRelative(-1.648F, 1.841F, -4.042F, 3.0F, -6.708F, 3.0F)
          curveToRelative(-4.97F, 0.0F, -9.0F, -4.03F, -9.0F, -9.0F)
          close()        
      }
    }
    return _blur24!!
  }

private var _blur24: ImageVector? = null
