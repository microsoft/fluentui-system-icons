package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EraserSegment20: ImageVector
  get() {
    if (_eraserSegment20 != null) {
      return _eraserSegment20!!
    }
    _eraserSegment20 = fluentIcon(name = "Filled.EraserSegment20", 20f) {
      materialPath {
          moveTo(13.318F, 2.44F)
          curveToRelative(-0.585F, -0.587F, -1.535F, -0.587F, -2.121F, 0.0F)
          lineToRelative(-8.76F, 8.759F)
          curveToRelative(-0.585F, 0.586F, -0.585F, 1.536F, 0.0F, 2.121F)
          lineToRelative(4.243F, 4.243F)
          curveTo(6.993F, 17.876F, 7.41F, 18.022F, 7.82F, 18.0F)
          horizontalLineToRelative(6.265F)
          curveToRelative(0.206F, 0.583F, 0.762F, 1.0F, 1.415F, 1.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(16.328F, 16.0F, 15.5F, 16.0F)
          curveToRelative(-0.653F, 0.0F, -1.209F, 0.418F, -1.415F, 1.0F)
          horizontalLineToRelative(-4.72F)
          lineToRelative(8.196F, -8.197F)
          curveToRelative(0.586F, -0.586F, 0.586F, -1.535F, 0.0F, -2.121F)
          lineToRelative(-4.243F, -4.243F)
          close()
          moveToRelative(-8.487F, 7.78F)
          lineToRelative(4.95F, 4.949F)
          lineToRelative(-1.687F, 1.687F)
          curveToRelative(-0.195F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-4.242F, -4.243F)
          curveToRelative(-0.196F, -0.195F, -0.196F, -0.512F, 0.0F, -0.707F)
          lineTo(4.83F, 10.22F)
          close()        
      }
    }
    return _eraserSegment20!!
  }

private var _eraserSegment20: ImageVector? = null
