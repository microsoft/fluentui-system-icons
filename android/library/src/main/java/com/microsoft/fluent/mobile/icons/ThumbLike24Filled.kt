package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ThumbLike24: ImageVector
  get() {
    if (_thumbLike24 != null) {
      return _thumbLike24!!
    }
    _thumbLike24 = fluentIcon(name = "Filled.ThumbLike24", 24f) {
      materialPath {
          moveTo(15.056F, 9.004F)
          curveToRelative(0.46F, -1.427F, 0.693F, -2.677F, 0.693F, -3.754F)
          curveToRelative(0.0F, -2.398F, -0.939F, -4.247F, -2.5F, -4.247F)
          curveToRelative(-0.847F, 0.0F, -1.109F, 0.504F, -1.437F, 1.747F)
          curveToRelative(0.018F, -0.065F, -0.163F, 0.634F, -0.215F, 0.821F)
          curveToRelative(-0.101F, 0.359F, -0.277F, 0.97F, -0.527F, 1.831F)
          curveToRelative(-0.007F, 0.023F, -0.017F, 0.045F, -0.03F, 0.065F)
          lineTo(8.174F, 9.953F)
          curveToRelative(-0.678F, 1.06F, -1.679F, 1.876F, -2.855F, 2.326F)
          lineToRelative(-1.257F, 0.482F)
          curveToRelative(-0.793F, 0.303F, -1.254F, 1.133F, -1.092F, 1.967F)
          lineToRelative(0.686F, 3.539F)
          curveToRelative(0.167F, 0.862F, 0.82F, 1.548F, 1.673F, 1.757F)
          lineToRelative(8.25F, 2.022F)
          curveToRelative(2.53F, 0.62F, 5.09F, -0.915F, 5.733F, -3.44F)
          lineToRelative(1.574F, -6.173F)
          curveToRelative(0.375F, -1.472F, -0.514F, -2.969F, -1.985F, -3.344F)
          curveToRelative(-0.222F, -0.057F, -0.45F, -0.085F, -0.68F, -0.085F)
          horizontalLineToRelative(-3.165F)
          close()        
      }
    }
    return _thumbLike24!!
  }

private var _thumbLike24: ImageVector? = null
