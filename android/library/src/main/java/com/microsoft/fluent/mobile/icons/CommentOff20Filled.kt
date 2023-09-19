package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CommentOff20: ImageVector
  get() {
    if (_commentOff20 != null) {
      return _commentOff20!!
    }
    _commentOff20 = fluentIcon(name = "Filled.CommentOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(2.91F, 3.615F)
          curveTo(2.353F, 4.087F, 2.0F, 4.787F, 2.0F, 5.566F)
          verticalLineToRelative(6.71F)
          curveToRelative(0.0F, 1.418F, 1.164F, 2.566F, 2.6F, 2.566F)
          horizontalLineToRelative(0.6F)
          verticalLineToRelative(2.171F)
          curveToRelative(0.0F, 0.213F, 0.07F, 0.42F, 0.2F, 0.591F)
          curveToRelative(0.33F, 0.437F, 0.957F, 0.526F, 1.399F, 0.2F)
          lineToRelative(4.011F, -2.962F)
          horizontalLineToRelative(3.325F)
          lineToRelative(3.011F, 3.012F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-2.309F, -2.308F)
          lineTo(3.823F, 3.116F)
          lineToRelative(-0.97F, -0.97F)
          close()
          moveTo(18.0F, 12.277F)
          curveToRelative(0.0F, 0.97F, -0.546F, 1.814F, -1.351F, 2.25F)
          lineTo(5.12F, 3.0F)
          horizontalLineTo(15.4F)
          curveTo(16.836F, 3.0F, 18.0F, 4.149F, 18.0F, 5.566F)
          verticalLineToRelative(6.71F)
          close()        
      }
    }
    return _commentOff20!!
  }

private var _commentOff20: ImageVector? = null
