package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pi20: ImageVector
  get() {
    if (_pi20 != null) {
      return _pi20!!
    }
    _pi20 = fluentIcon(name = "Regular.Pi20", 20f) {
      materialPath {
          moveTo(3.18F, 4.668F)
          curveTo(2.977F, 5.056F, 2.97F, 5.556F, 3.038F, 5.902F)
          curveTo(3.093F, 6.173F, 2.917F, 6.436F, 2.646F, 6.49F)
          curveToRelative(-0.27F, 0.054F, -0.534F, -0.122F, -0.588F, -0.392F)
          curveTo(1.961F, 5.61F, 1.953F, 4.86F, 2.292F, 4.208F)
          curveTo(2.655F, 3.504F, 3.377F, 3.0F, 4.542F, 3.0F)
          horizontalLineTo(16.5F)
          curveTo(16.776F, 3.0F, 17.0F, 3.224F, 17.0F, 3.5F)
          reflectiveCurveTo(16.776F, 4.0F, 16.5F, 4.0F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(9.665F)
          curveToRelative(0.0F, 1.543F, 0.469F, 2.058F, 0.837F, 2.23F)
          curveToRelative(0.423F, 0.199F, 0.998F, 0.091F, 1.436F, -0.132F)
          curveToRelative(0.246F, -0.125F, 0.547F, -0.027F, 0.673F, 0.219F)
          curveToRelative(0.125F, 0.246F, 0.027F, 0.547F, -0.22F, 0.672F)
          curveToRelative(-0.56F, 0.286F, -1.486F, 0.534F, -2.313F, 0.148F)
          curveTo(13.531F, 16.389F, 13.0F, 15.378F, 13.0F, 13.665F)
          verticalLineTo(4.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(0.028F)
          curveToRelative(-0.085F, 1.51F, -0.286F, 4.048F, -0.617F, 6.514F)
          curveToRelative(-0.166F, 1.232F, -0.365F, 2.453F, -0.6F, 3.522F)
          curveToRelative(-0.232F, 1.059F, -0.507F, 2.002F, -0.836F, 2.66F)
          curveToRelative(-0.123F, 0.247F, -0.424F, 0.347F, -0.67F, 0.223F)
          curveToRelative(-0.248F, -0.123F, -0.348F, -0.424F, -0.224F, -0.67F)
          curveToRelative(0.271F, -0.543F, 0.525F, -1.387F, 0.754F, -2.428F)
          curveToRelative(0.227F, -1.032F, 0.421F, -2.223F, 0.585F, -3.44F)
          curveTo(6.717F, 7.988F, 6.915F, 5.492F, 6.999F, 4.0F)
          horizontalLineTo(4.542F)
          curveTo(3.714F, 4.0F, 3.355F, 4.328F, 3.179F, 4.668F)
          close()        
      }
    }
    return _pi20!!
  }

private var _pi20: ImageVector? = null
