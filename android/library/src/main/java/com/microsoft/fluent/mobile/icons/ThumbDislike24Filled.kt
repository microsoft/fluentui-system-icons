package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ThumbDislike24: ImageVector
  get() {
    if (_thumbDislike24 != null) {
      return _thumbDislike24!!
    }
    _thumbDislike24 = fluentIcon(name = "Filled.ThumbDislike24", 24f) {
      materialPath {
          moveTo(15.056F, 14.183F)
          curveToRelative(0.46F, 1.427F, 0.693F, 2.676F, 0.693F, 3.753F)
          curveToRelative(0.0F, 2.398F, -0.939F, 4.247F, -2.5F, 4.247F)
          curveToRelative(-0.8F, 0.0F, -1.078F, -0.45F, -1.383F, -1.546F)
          lineToRelative(-0.27F, -1.022F)
          curveToRelative(-0.1F, -0.358F, -0.276F, -0.97F, -0.526F, -1.83F)
          curveToRelative(-0.007F, -0.024F, -0.017F, -0.046F, -0.03F, -0.066F)
          lineToRelative(-2.866F, -4.485F)
          curveToRelative(-0.678F, -1.061F, -1.679F, -1.877F, -2.855F, -2.327F)
          lineToRelative(-1.257F, -0.481F)
          curveTo(3.269F, 10.122F, 2.808F, 9.292F, 2.97F, 8.458F)
          lineTo(3.656F, 4.92F)
          curveToRelative(0.167F, -0.862F, 0.82F, -1.548F, 1.673F, -1.757F)
          lineToRelative(8.25F, -2.022F)
          curveToRelative(2.53F, -0.62F, 5.09F, 0.914F, 5.733F, 3.44F)
          lineToRelative(1.574F, 6.172F)
          curveToRelative(0.375F, 1.472F, -0.514F, 2.97F, -1.985F, 3.344F)
          curveToRelative(-0.222F, 0.057F, -0.45F, 0.086F, -0.68F, 0.086F)
          horizontalLineToRelative(-3.165F)
          close()        
      }
    }
    return _thumbDislike24!!
  }

private var _thumbDislike24: ImageVector? = null
