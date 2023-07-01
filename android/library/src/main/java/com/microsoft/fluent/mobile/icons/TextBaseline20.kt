package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextBaseline20: ImageVector
  get() {
    if (_textBaseline20 != null) {
      return _textBaseline20!!
    }
    _textBaseline20 = fluentIcon(name = "Filled.TextBaseline20", 20f) {
      materialPath {
          moveTo(10.698F, 3.475F)
          curveTo(10.585F, 3.188F, 10.308F, 3.0F, 10.001F, 3.0F)
          curveTo(9.693F, 3.0F, 9.416F, 3.188F, 9.303F, 3.475F)
          lineToRelative(-3.75F, 9.5F)
          curveTo(5.4F, 13.36F, 5.59F, 13.795F, 5.975F, 13.948F)
          curveToRelative(0.385F, 0.152F, 0.82F, -0.037F, 0.973F, -0.423F)
          lineTo(8.142F, 10.5F)
          horizontalLineToRelative(3.716F)
          lineToRelative(1.195F, 3.025F)
          curveToRelative(0.152F, 0.386F, 0.587F, 0.575F, 0.973F, 0.423F)
          curveToRelative(0.385F, -0.152F, 0.574F, -0.588F, 0.422F, -0.973F)
          lineToRelative(-3.75F, -9.5F)
          close()
          moveTo(11.266F, 9.0F)
          horizontalLineTo(8.734F)
          lineToRelative(1.267F, -3.207F)
          lineTo(11.266F, 9.0F)
          close()
          moveTo(2.5F, 16.0F)
          curveTo(2.224F, 16.0F, 2.0F, 16.224F, 2.0F, 16.5F)
          reflectiveCurveTo(2.224F, 17.0F, 2.5F, 17.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 16.0F, 17.5F, 16.0F)
          horizontalLineToRelative(-15.0F)
          close()        
      }
    }
    return _textBaseline20!!
  }

private var _textBaseline20: ImageVector? = null
