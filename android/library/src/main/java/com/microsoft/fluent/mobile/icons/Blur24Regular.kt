package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Blur24: ImageVector
  get() {
    if (_blur24 != null) {
      return _blur24!!
    }
    _blur24 = fluentIcon(name = "Regular.Blur24", 24f) {
      materialPath {
          moveTo(3.0F, 12.0F)
          curveToRelative(0.0F, -4.97F, 4.03F, -9.0F, 9.0F, -9.0F)
          curveToRelative(1.84F, 0.0F, 3.551F, 0.552F, 4.977F, 1.5F)
          horizontalLineTo(12.0F)
          curveToRelative(-4.142F, 0.0F, -7.5F, 3.358F, -7.5F, 7.5F)
          curveToRelative(0.0F, 4.142F, 3.358F, 7.5F, 7.5F, 7.5F)
          verticalLineTo(18.0F)
          horizontalLineToRelative(6.708F)
          curveToRelative(-1.648F, 1.841F, -4.042F, 3.0F, -6.708F, 3.0F)
          curveToRelative(-4.97F, 0.0F, -9.0F, -4.03F, -9.0F, -9.0F)
          close()
          moveToRelative(15.225F, -6.5F)
          horizontalLineTo(12.0F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(7.485F)
          curveToRelative(-0.365F, -0.545F, -0.788F, -1.048F, -1.26F, -1.5F)
          close()
          moveTo(12.0F, 8.0F)
          horizontalLineToRelative(8.064F)
          curveToRelative(0.238F, 0.477F, 0.434F, 0.979F, 0.584F, 1.5F)
          horizontalLineTo(12.0F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(8.876F, 2.5F)
          horizontalLineTo(12.0F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.0F, -0.511F, -0.043F, -1.012F, -0.124F, -1.5F)
          close()
          moveTo(12.0F, 13.0F)
          horizontalLineToRelative(8.945F)
          curveToRelative(-0.057F, 0.514F, -0.157F, 1.015F, -0.297F, 1.5F)
          horizontalLineTo(12.0F)
          verticalLineTo(13.0F)
          close()
          moveToRelative(8.294F, 2.5F)
          horizontalLineTo(12.0F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(7.485F)
          curveToRelative(0.314F, -0.47F, 0.586F, -0.972F, 0.81F, -1.5F)
          close()        
      }
    }
    return _blur24!!
  }

private var _blur24: ImageVector? = null
