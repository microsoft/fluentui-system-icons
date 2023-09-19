package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextColumnOneSemiNarrow20: ImageVector
  get() {
    if (_textColumnOneSemiNarrow20 != null) {
      return _textColumnOneSemiNarrow20!!
    }
    _textColumnOneSemiNarrow20 = fluentIcon(name = "Regular.TextColumnOneSemiNarrow20", 20f) {
      materialPath {
          moveTo(6.5F, 5.0F)
          curveTo(6.224F, 5.0F, 6.0F, 5.224F, 6.0F, 5.5F)
          reflectiveCurveTo(6.224F, 6.0F, 6.5F, 6.0F)
          horizontalLineToRelative(7.0F)
          curveTo(13.776F, 6.0F, 14.0F, 5.776F, 14.0F, 5.5F)
          reflectiveCurveTo(13.776F, 5.0F, 13.5F, 5.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(6.224F, 8.0F, 6.0F, 8.224F, 6.0F, 8.5F)
          reflectiveCurveTo(6.224F, 9.0F, 6.5F, 9.0F)
          horizontalLineToRelative(7.0F)
          curveTo(13.776F, 9.0F, 14.0F, 8.776F, 14.0F, 8.5F)
          reflectiveCurveTo(13.776F, 8.0F, 13.5F, 8.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(6.0F, 11.5F)
          curveTo(6.0F, 11.224F, 6.224F, 11.0F, 6.5F, 11.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(13.776F, 12.0F, 13.5F, 12.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(6.224F, 12.0F, 6.0F, 11.776F, 6.0F, 11.5F)
          close()
          moveTo(6.5F, 14.0F)
          curveTo(6.224F, 14.0F, 6.0F, 14.224F, 6.0F, 14.5F)
          reflectiveCurveTo(6.224F, 15.0F, 6.5F, 15.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 14.0F, 13.5F, 14.0F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _textColumnOneSemiNarrow20!!
  }

private var _textColumnOneSemiNarrow20: ImageVector? = null
